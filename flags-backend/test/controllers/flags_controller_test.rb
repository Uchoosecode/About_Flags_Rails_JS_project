require 'test_helper'

class FlagsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @flag = flags(:one)
  end

  test "should get index" do
    get flags_url, as: :json
    assert_response :success
  end

  test "should create flag" do
    assert_difference('Flag.count') do
      post flags_url, params: { flag: { country_id: @flag.country_id, description: @flag.description, name: @flag.name, year_created: @flag.year_created } }, as: :json
    end

    assert_response 201
  end

  test "should show flag" do
    get flag_url(@flag), as: :json
    assert_response :success
  end

  test "should update flag" do
    patch flag_url(@flag), params: { flag: { country_id: @flag.country_id, description: @flag.description, name: @flag.name, year_created: @flag.year_created } }, as: :json
    assert_response 200
  end

  test "should destroy flag" do
    assert_difference('Flag.count', -1) do
      delete flag_url(@flag), as: :json
    end

    assert_response 204
  end
end
