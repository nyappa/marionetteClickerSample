require 'sinatra'
require "json"
require "json-fuzz-generator"
require 'logger'

logger = Logger.new(STDOUT)

set :environment, :production

get '/' do
  erb :index
end

get'/generate_data.json' do
    content_type :json
    if @params[:id] == "12" then
        return [ 
          {:id => 1234, :name => "tanaka"},
          {:id => 2344, :name => "misono6"},
          {:id => 2345, :name => "misono4"},
          {:id => 2346, :name => "misono3"},
          {:id => 2343, :name => "misono"}
        ].to_json
    end
    [ 
      {:id => 1234, :name => "tanaka"},
      {:id => 2344, :name => "misono"}
    ].to_json
end
