class BlocksController < ApplicationController
  def index
    @block = Block.new
  end
end
