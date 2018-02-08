class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
  @tweet = Tweet.new(message: params["message"]);
    if @tweet.save
      render partial: @tweet
    else
      render plain: 'Fail'
    end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
