-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cololaceramica
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cololaceramica
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cololaceramica` DEFAULT CHARACTER SET utf8 ;
USE `cololaceramica` ;

-- -----------------------------------------------------
-- Table `cololaceramica`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `cololaceramica`.`addresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`addresses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(100) NOT NULL,
  `postcode` INT NOT NULL,
  `street` VARCHAR(100) NOT NULL,
  `number` INT NOT NULL,
  `flour` VARCHAR(45) NULL DEFAULT NULL,
  `apartment` VARCHAR(45) NULL DEFAULT NULL,
  `user_address_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_address_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `cololaceramica`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` TINYINT(4) NOT NULL DEFAULT 1,
  `total` INT NOT NULL,
  `user_cart_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_cart_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
-- -----------------------------------------------------
-- Table `cololaceramica`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`favorites` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` TINYINT(4) NOT NULL DEFAULT 1,
  `total` INT NOT NULL,
  `user_cart_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_favorite_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `cololaceramica`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `vajilla` TINYINT(4) NOT NULL DEFAULT 0,
  `decoracion` TINYINT(4) NOT NULL DEFAULT 0,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `cololaceramica`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` INT NOT NULL,
  `summary` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `outstanding` TINYINT(4) NULL DEFAULT 0,
  `category_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
    CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `cololaceramica`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `cololaceramica`.`cart_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`cart_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `cart_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `product_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cart_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
-- -----------------------------------------------------
-- Table `cololaceramica`.`favorite_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`favorite_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_fav_id` INT NOT NULL,
  `favorite_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `product_fav_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `favorite_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`favorites` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `cololaceramica`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_img_id` INT NOT NULL,
  `route` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `product_img_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `cololaceramica`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `cololaceramica`.`user_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cololaceramica`.`user_roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `role_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id`
    FOREIGN KEY (`id`)
    REFERENCES `cololaceramica`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
