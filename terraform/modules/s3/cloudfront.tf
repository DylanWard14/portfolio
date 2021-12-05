resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.dylan-ward-s3-bucket.bucket_regional_domain_name
    origin_id = "S3-bucket-${var.domain_name}"
  }

  aliases = ["${var.domain_name}.${var.domain_name}.com"]
  enabled = true
  default_root_object = "index.html"

    default_cache_behavior {
        allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
        cached_methods   = ["GET", "HEAD"]
        target_origin_id = "S3-bucket-${var.domain_name}"

        forwarded_values {
        query_string = false

        cookies {
            forward = "none"
        }
    }

        viewer_protocol_policy = "allow-all"
        min_ttl                = 0
        default_ttl            = 3600
        max_ttl                = 86400
    }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = "production"
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.cert.certificate_arn
    ssl_support_method       = "sni-only"
    # minimum_protocol_version = "TLSv1.1_2016"
  }
}