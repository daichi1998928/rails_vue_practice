json.array! @tweets do |tweet|
    json.title tweet.title
    json.comment tweet.comment
  end