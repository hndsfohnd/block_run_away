class BlocksController < ApplicationController
  def index
    @block = Block.new
    @before
    
  end

  def create
    @block = Block.new(block_params)
    if @block.save
      create_hash(@block)
      create_beforehash(@block)
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
      block.selfhash =  SecureRandom.hex(32)
      block.save
    end

    def create_beforehash(block)
      beforehash_array = Block.last(2).take(1)
      block.beforehash = beforehash_array[0].selfhash
      block.save

    end

end
