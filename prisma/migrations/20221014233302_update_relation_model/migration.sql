/*
  Warnings:

  - The primary key for the `movies_genres` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gen_id` on the `movies_genres` table. All the data in the column will be lost.
  - Added the required column `gen_name` to the `Movies_Genres` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `movies_genres` DROP FOREIGN KEY `Movies_Genres_gen_id_fkey`;

-- AlterTable
ALTER TABLE `movies_genres` DROP PRIMARY KEY,
    DROP COLUMN `gen_id`,
    ADD COLUMN `gen_name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`mov_id`, `gen_name`);

-- AddForeignKey
ALTER TABLE `Movies_Genres` ADD CONSTRAINT `Movies_Genres_gen_name_fkey` FOREIGN KEY (`gen_name`) REFERENCES `genres`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
