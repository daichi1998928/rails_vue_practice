json.array! @tweets do |tweet|
    json.id tweet.id
    json.title tweet.title
    json.comment tweet.comment
  end