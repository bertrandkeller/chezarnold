##############
# Jekyll tasks
##############

# Usage: rake serve, rake serve:prod
task :build => ["build:prod"]
namespace :build do

  desc "Regenerate files for production"
  task :prod do
    puts "* Regenerating files for production... first time"
    puts "rvm install ruby-2.6.2"
    puts "rvm use ruby-2.6.2"
    system "bundle exec jekyll build"
    puts "* Finish"
  end

  desc "Regenerate files for development"
  task :dev do
    puts "* Regenerating files for development..."
    system "JEKYLL_ENV=development bundle exec jekyll clean && bundle exec jekyll build --limit_posts 3 --incremental --config _config.yml,_config_dev.yml --profile"
  end

  desc "Regenerate files and drafts for development"
  task :drafts do
    puts "* Regenerating files and drafts for development..."
    system "JEKYLL_ENV=development bundle exec jekyll clean && bundle exec jekyll build --config _config.yml,_config.dev.yml --profile --drafts"
  end
end

# Usage: rake serve, rake serve:prod
task :serve => ["serve:dev"]
namespace :serve do

  desc "Serve development Jekyll site locally"
  task :dev do
    puts "Starting up development Jekyll site server..."
    system "JEKYLL_ENV=development bundle exec jekyll clean && bundle exec jekyll s --config _config.yml,_config_dev.yml --profile --trace --limit_posts 3"
  end

  desc "Serve development Jekyll site locally"
  task :reload do
    puts "Starting up development Jekyll site server with livereload..."
    system "JEKYLL_ENV=development bundle exec jekyll clean && bundle exec jekyll s --config _config.yml,_config_dev.yml --profile --trace  --limit_posts 3 --livereload port:6000"
  end

  desc "Serve production Jekyll site locally"
  task :prod do
    puts "Starting up production Jekyll site server..."
    system "bundle exec jekyll s --no-watch"
  end
end

##################
# Deployment tasks
##################

# Usage: rake rsync
desc "rsync the contents of ./_site to the server"
task :rsync do
  puts "* rsyncing the contents of ./_site to the server"
  system "dploy bk"
end

# Usage: rake deploy, rake deploy:win
task :deploy => ["deploy:prod"]
namespace :deploy do
  desc "Regenerate and rsync production files and notify services of the update"
  task :prod => ["build", "rsync", "notify"] do
  end

  # Usage: rake deploy:win
  desc "Regenerate and rsync production files and notify services of the update (Windows systems)"
  task :win => ["build:win", "rsync", "notify"] do
  end
end



####################
# Notification tasks
####################

# Usage: rake notify
task :notify => ["notify:pingomatic", "notify:google", "notify:bing"]
desc "Notify various services that the site has been updated"
namespace :notify do

  desc "Notify Ping-O-Matic"
  task :pingomatic do
    begin
      require 'xmlrpc/client'
      puts "* Notifying Ping-O-Matic that the site has updated"
      XMLRPC::Client.new('rpc.pingomatic.com', '/').call('weblogUpdates.extendedPing', 'bertrandkeller.info' , 'https://bertrandkeller.info', 'https://bertrandkeller.info/feed.xml')
    rescue LoadError
      puts "! Could not ping ping-o-matic, because XMLRPC::Client could not be found."
    end
  end

  desc "Notify Google of updated sitemap"
  task :google do
    begin
      require 'net/http'
      require 'uri'
      puts "* Notifying Google that the site has updated"
      Net::HTTP.get('www.google.com', '/webmasters/tools/ping?sitemap=' + URI.escape('https://bertrandkeller.info/sitemap.xml'))
    rescue LoadError
      puts "! Could not ping Google about our sitemap, because Net::HTTP or URI could not be found."
    end
  end

  desc "Notify Bing of updated sitemap"
  task :bing do
    begin
      require 'net/http'
      require 'uri'
      puts '* Notifying Bing that the site has updated'
      Net::HTTP.get('www.bing.com', '/webmaster/ping.aspx?siteMap=' + URI.escape('https://bertrandkeller.info/sitemap.xml'))
    rescue LoadError
      puts "! Could not ping Bing about our sitemap, because Net::HTTP or URI could not be found."
    end
  end
end
