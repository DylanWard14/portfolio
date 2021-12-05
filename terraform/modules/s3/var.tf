variable "domain_name" {
  default = "dylan-ward"
}

variable "domain_hosted_zone_id" {
  type = string
}

variable "acl_value" {
  default = "public-read"
}