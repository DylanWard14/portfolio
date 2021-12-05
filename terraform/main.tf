terraform {
  backend "remote" {
    organization = "dylan-ward"
    workspaces {
      name = "dylan-ward"
    }
  }
}

provider "aws" {
    access_key = "${var.AWS_ACCESS_KEY}"
    secret_key = "${var.AWS_SECRET_KEY}"
    region = "${var.region}"
}

module "s3" {
  source = "./modules/s3"
  domain_hosted_zone_id = var.domain_hosted_zone_id
}