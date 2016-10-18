class CreateBenches < ActiveRecord::Migration[5.0]
  def change
    create_table :benches do |t|
      t.string :description
      t.float :lat
      t.float :lng
      t.integer :seating
      t.string :picture_url

      t.timestamps
    end
  end
end
