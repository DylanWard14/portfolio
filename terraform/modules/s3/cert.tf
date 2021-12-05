# Create cert
resource "aws_acm_certificate" "app_cert" {
  domain_name = var.domain_name
  validation_method = "DNS"

  tags = {
    Environment = "test"
  }

  lifecycle {
    create_before_destroy = true
  }
}

# Validate cert
resource "aws_route53_record" "cert_validation" {
  allow_overwrite = true
  name = tolist(aws_acm_certificate.app_cert.domain_validation_options)[0].resource_record_name
  records = [ tolist(aws_acm_certificate.app_cert.domain_validation_options)[0].resource_record_value ]
  type = tolist(aws_acm_certificate.app_cert.domain_validation_options)[0].resource_record_type
  zone_id = var.domain_hosted_zone_id
  ttl = 60
  depends_on = [
    aws_acm_certificate.app_cert
  ]
}

# This tells terraform to cause the route53 validation to happen
resource "aws_acm_certificate_validation" "cert" {
  certificate_arn = aws_acm_certificate.app_cert.arn
  validation_record_fqdns = [ aws_route53_record.cert_validation.fqdn ]
}
