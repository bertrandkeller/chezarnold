source 'https://rubygems.org'

require 'json'
require 'open-uri'

gem 'jekyll', :github => 'jekyll', :branch => 'master'
gem 'liquid', :git => 'https://github.com/Shopify/liquid.git', branch: 'master'
gem "liquid-c"

group :development do
    gem 'octopress-autoprefixer'
end

group :test do
    gem 'rake', '~> 11.0.0'
    gem 'html-proofer', '~> 3.0.0'
end

group :jekyll_plugins do
    #gem 'jekyll-sitemap'
    gem 'jekyll-feed'
    gem "jekyll-seo-tag"
    #gem "jekyll-default-layout"
    gem "jekyll-tidy"
    gem "jekyll-include-cache"
    gem 'jekyll-cloudinary'
    #gem 'jekyll-algolia', '~> 1.0'
    gem "overkyll-jekyll-theme"
    gem 'jekyll-commonmark'
end
