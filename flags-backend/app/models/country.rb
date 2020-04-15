class Country < ApplicationRecord
  belongs_to :continent
  has_one :flag
  has_many :colors, through: :flags
end
