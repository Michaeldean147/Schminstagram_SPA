# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create(image_url: 'http://i.imgur.com/WIMW9su.jpg', title:'Canned Bread',user_name:'Turd Furgeson')
Post.create(image_url: 'http://i.imgur.com/lCcZtLr.jpg', title:'Oreo Mastery',user_name:'Jock Samson')
Post.create(image_url: 'http://i.imgur.com/42YIOzJ.jpg', title:'Nick Tapes',user_name:'Jody Highroller')
