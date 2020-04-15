class Flag < ApplicationRecord
  belongs_to :country
  has_many :colors
end
