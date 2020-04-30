class Flag < ApplicationRecord
  has_many :flag_colors
  has_many :colors, through: :flag_colors

  has_many_attached :images

  validates :name, presence: true, uniqueness: true
end
