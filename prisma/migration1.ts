
-- Criação da tabela `tbFuncionario`
CREATE TABLE `tbFuncionario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Criação da tabela `tbProdutos`
CREATE TABLE `tbProdutos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `marcaId` INTEGER NOT NULL,
    PRIMARY KEY (`id`), 
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Criação da tabela `tbVendas`
CREATE TABLE `tbVendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funcionarioId` INTEGER NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_tbVendas_tbFuncionario` FOREIGN KEY (`funcionarioId`) REFERENCES `tbFuncionario` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

