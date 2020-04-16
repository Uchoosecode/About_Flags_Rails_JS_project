class Country < ApplicationRecord
  belongs_to :continent
  belongs_to :flag
  has_many :colors, through: :flags
end
