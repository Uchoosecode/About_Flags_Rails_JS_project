class Api::V1::FlagsController < ApplicationController
  before_action :set_flag, only: [:show, :update, :destroy]

  # GET /flags
  def index
    @flags = Flag.all

    render json: @flags, except: [:created_at, :updated_at], methods: :colors
  end

  # GET /flags/1
  def show
    render json: @flag, include: :color
  end

  # POST /flags
  def create
    @flag = Flag.new(flag_params)

    if @flag.save
      render json: @flag, status: :created, include: :colors
    else
      render json: @flag.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /flags/1
  def update
    if @flag.update(flag_params)
      render json: @flag
    else
      render json: @flag.errors, status: :unprocessable_entity
    end
  end

  # DELETE /flags/1
  def destroy
    @flag.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flag
      @flag = Flag.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def flag_params
      params.require(:flag).permit(:name, :description, :year_created, :image, :color_ids => [])
    end
end
