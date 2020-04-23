class FlagColorSerializer

    def initializer(color_object)
        @colors = color_object 
    end

    def to_serialized_json
        options = {
            include: {
                color: {
                    name: {
                        only: [:name]
                    }
                },
                flag: {
                    name: {
                        only: [:name, :description, :year_created]
                    }
                }
            },
            except: {
                [:created_at, :updated_at]
            }
        }
    end
    

end