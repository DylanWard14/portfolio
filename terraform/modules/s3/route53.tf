resource "aws_route53_record" "test" {
    zone_id = var.domain_hosted_zone_id
    name = var.domain_name
    type = "A"
    alias {
        # name = aws_s3_bucket.dylan-ward-s3-bucket.website_endpoint
        name= aws_cloudfront_distribution.s3_distribution.domain_name
        # name = "${var.domain_name}.s3-website-ap-southeast-2.amazonaws.com"
        zone_id = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
        evaluate_target_health = false
    }
}