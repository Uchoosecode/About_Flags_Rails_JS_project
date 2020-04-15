class CreateFlags < ActiveRecord::Migration[6.0]
  def change
    create_table :flags do |t|
      t.string :name
      
      t.text :description
      t.string :year_created

      t.timestamps
    end
  end
end
