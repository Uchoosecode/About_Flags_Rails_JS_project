class API::V1::ContinentsController < ApplicationController
  before_action :set_continent, only: [:show, :update, :destroy]

  # GET /continents
  def index
    @continents = Continent.all

    render json: @continents
  end

  # GET /continents/1
  def show
    render json: @continent
  end

  # POST /continents
  def create
    @continent = Continent.new(continent_params)

    if @continent.save
      render json: @continent, status: :created, location: @continent
    else
      render json: @continent.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /continents/1
  def update
    if @continent.update(continent_params)
      render json: @continent
    else
      render json: @continent.errors, status: :unprocessable_entity
    end
  end

  # DELETE /continents/1
  def destroy
    @continent.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_continent
      @continent = Continent.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def continent_params
      params.require(:continent).permit(:name)
    end
end
