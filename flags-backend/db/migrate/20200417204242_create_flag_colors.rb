class CreateFlagColors < ActiveRecord::Migration[6.0]
  def change
    create_table :flag_colors do |t|
      t.belongs_to :flag, null: false, foreign_key: true
      t.belongs_to :color, null: false, foreign_key: true

      t.timestamps
    end
  end
end
