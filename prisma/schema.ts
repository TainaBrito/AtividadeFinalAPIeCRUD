datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model tbProdutos {
  id        Int      @id @default(autoincrement())
  nome      String @unique
  marcaId   Int
  tbMarca   tbMarca  @relation(fields: [marcaId], references: [id])
  tbItemVenda tbItemVenda[]
}

model tbVendas {
  id            Int         @id @default(autoincrement())
  funcionarioId Int
  tbFuncionario tbFuncionario @relation(fields: [funcionarioId], references: [id])
  tbItemVenda   tbItemVenda[]
}

model tbItemVenda {
  id        Int         @id @default(autoincrement())
  produtoId Int
  vendaId   Int
  estado    Char
  preco     Float
  tbProdutos tbProdutos  @relation(fields: [produtoId], references: [id])
  tbVendas   tbVendas    @relation(fields: [vendaId], references: [id], onDelete: Cascade)
}
model tbMarca {
  id        Int          @id @default(autoincrement())
  nome      String        @unique
  tbProdutos tbProdutos[] 
}

model tbFuncionario {
  id        Int         @id @default(autoincrement())
  nome      String
  senha     String
  tbVendas  tbVendas[]
}
