class PostsController < ApplicationController

  def index
    @posts = Post.all
    @post = Post.new
  end

  def create
    puts params
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post
  end

  private
  def post_params
    params.require(:post).permit(:image_url, :title, :user_name)
  end

end
