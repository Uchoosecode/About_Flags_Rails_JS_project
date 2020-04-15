class Continent < ApplicationRecord
    has_many :countries
    has_many :flags, through: :countries
end
