class TweetsController < ApplicationController
  before_action :tweet_set, only:[:show,:edit,:update,:destroy]
  protect_from_forgery

  # GET /tweets
  # GET /tweets.json
  def index
    @tweets = Tweet.all
  end

  # GET /tweets/1
  # GET /tweets/1.json
  def show
      @tweet = Tweet.find(params[:id])    
  end

  # GET /tweets/new
  def new
    @tweet = Tweet.new
  end
  # GET /tweets/1/edit
  def edit
    @tweet = Tweet.find(params[:id])
  end

  # POST /tweets
  # POST /tweets.json
  def create   
     @tweet = Tweet.new(tweet_params)
      if @tweet.save
        render json: @tweet, status: 200
      else
        render json: @tweet
      end
    
  end

  # PATCH/PUT /tweets/1
  # PATCH/PUT /tweets/1.json
  def update
      if @tweet.update(tweet_params)
       render json: @tweet,status: 200
      end
  
  end

  # DELETE /tweets/1
  # DELETE /tweets/1.json
  def destroy
     @tweet.destroy
  end

    private
    # Use callbacks to share common setup or constraints between actions.
    def tweet_set
     @tweet = Tweet.find(params[:id])
    end
    # Never trust parameters from the scary internet, only allow the white list through.
    def tweet_params
      params.require(:tweet).permit(:title,:comment)
    end
end
