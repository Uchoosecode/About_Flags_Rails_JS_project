class Color < ApplicationRecord
  has_many :flag_colors
  has_many :flags, through: :flag_colors

  validates :name, presence: true, uniqueness: true
end
