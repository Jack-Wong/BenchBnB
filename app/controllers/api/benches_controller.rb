class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
  end

  def index
    @bench = Bench.all
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating, :picture_url)
  end
end
