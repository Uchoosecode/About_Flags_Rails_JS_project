class CreateCountries < ActiveRecord::Migration[6.0]
  def change
    create_table :countries do |t|
      t.string :name
      t.integer :population
      t.belongs_to :continent, null: false, foreign_key: true
      t.belongs_to :flag, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
