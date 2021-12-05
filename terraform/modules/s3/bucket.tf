resource "aws_s3_bucket" "dylan-ward-s3-bucket" {
  bucket = "${var.domain_name}"
  acl = "${var.acl_value}"
  policy = data.aws_iam_policy_document.website_policy.json
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}