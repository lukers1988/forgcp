provider "firebase" {
    token = var.firebase_token
}

resource "firebase_hosting_site" "my_site" {
    project_id = var.project_id
    site_id = var.site_id
}

resource "firebase_hosting_version" "my_version" {
    site_id = firebase_hosting_site.my_site.site_id
    projet = firebase_hosting_site.my_site.project_id
    source = "build"
}
