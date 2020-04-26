class Flag < ApplicationRecord
  has_many :flag_colors
  has_many :colors, through: :flags_colors
end
