class Api::V1::FlagsColorsController < ApplicationController
    def index
        @flag_colors = FlagColor.all
        render json: FlagColorSerializer.new(@flag_colors).to_serialized_json
      end
     
      def show
        @flag_color = FlagColor.find_by(id: params[:id])
        render json: FlagColorSerializer.new(flag_color).to_serialized_json
      end
    end
end
