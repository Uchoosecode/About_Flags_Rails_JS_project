class Api::V1::FlagsColorsController < ApplicationController
    def index
        @flags_colors = FlagColor.all
        render json: Flag_ColorSerializer.new(@flags_colors).to_serialized_json
      end
     
      def show
        @flag_Color = FlagColor.find_by(id: params[:id])
        render json: FlagColorSerializer.new(flag_color.to_serialized_json
      end
    end
end
