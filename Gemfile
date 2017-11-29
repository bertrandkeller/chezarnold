source 'https://rubygems.org'

require 'json'
require 'open-uri'
gem "rack-jekyll"

group :development do
    gem 'foreman'
    gem 'octopress-autoprefixer'
end

group :test do
    gem 'rake', '~> 11.0.0'
    gem 'html-proofer', '~> 3.0.0'
end

group :jekyll_plugins do
    gem 'jekyll-sitemap'
    gem 'jekyll-feed'
    gem "jekyll-seo-tag"
    gem "jekyll-default-layout"
    gem "jekyll-tidy"
    gem 'jekyll-cloudinary'
    gem 'jekyll-algolia', :github => 'algolia/jekyll-algolia', :branch => 'develop'
end
