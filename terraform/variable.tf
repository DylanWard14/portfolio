variable "AWS_ACCESS_KEY" {
    type = string
}
variable "AWS_SECRET_KEY" {
    type = string
 }
variable "region" {
    default = "us-east-1"
}

variable "domain_hosted_zone_id" {
  type = string
}