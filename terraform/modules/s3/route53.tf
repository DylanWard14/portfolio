resource "aws_route53_record" "cloudfront_record" {
    zone_id = var.domain_hosted_zone_id
    name = var.domain_name
    type = "A"
    alias {
        name= aws_cloudfront_distribution.s3_distribution.domain_name
        zone_id = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
        evaluate_target_health = false
    }
}