-- CreateTable
CREATE TABLE `movies` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `year` CHAR(4) NOT NULL,
    `synopsis` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `movies_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genres` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `genres_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movies_Genres` (
    `mov_id` VARCHAR(191) NOT NULL,
    `gen_id` INTEGER NOT NULL,

    PRIMARY KEY (`mov_id`, `gen_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Movies_Genres` ADD CONSTRAINT `Movies_Genres_mov_id_fkey` FOREIGN KEY (`mov_id`) REFERENCES `movies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movies_Genres` ADD CONSTRAINT `Movies_Genres_gen_id_fkey` FOREIGN KEY (`gen_id`) REFERENCES `genres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
