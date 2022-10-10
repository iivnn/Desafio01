CREATE DATABASE [Desafio]
GO

USE [Desafio]
GO

CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [nvarchar](255) NULL,
	[Sobrenome] [nvarchar](255) NULL,
	[Email] [nvarchar](255) NULL,
	[DataNascimento] [datetime] NULL,
	[Escolaridade] [int] NULL
) ON [PRIMARY]
GO
