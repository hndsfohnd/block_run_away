class BlocksController < ApplicationController
  def index
    @block = Block.new
    
  end

  def create
    @block = Block.new(block_params)
    if @block.save
      create_hash(@block)
      redirect_to blocks_path
    else
      render blocks_path

    end
  end

  private
    def block_params
      params.require(:block).permit(:transactiondata)
    end    

    def create_hash(block)
      block.beforehash =  SecureRandom.hex(32)
      block.save
    end

end
