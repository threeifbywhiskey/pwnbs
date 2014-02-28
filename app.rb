require 'sinatra'

get '/' do
  haml :index
end

post '/interpret' do
  File.write 'tmp/asm', params['file'][:tempfile].read
  `./blacktime tmp/asm > tmp/ws`
  `./wspace -d tmp/ws`
end
