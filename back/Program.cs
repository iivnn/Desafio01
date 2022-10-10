using back.Classes;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<Context>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("Context")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(x => x
                   .AllowAnyMethod()
                   .AllowAnyHeader()
                   .SetIsOriginAllowed(origin => true)
                   .AllowCredentials());
}

app.UseAuthorization();

app.MapControllers();

app.Run();
