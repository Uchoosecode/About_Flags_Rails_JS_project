class Flag < ApplicationRecord
  has_many :flag_colors
  has_many :colors, through: :flag_colors

  has_one_attached :image

  validates :name, presence: true, uniqueness: true
end
