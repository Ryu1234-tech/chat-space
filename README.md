## Chatspace
## DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|username|string|null: false|

### Association

- has_many:messages
- has_many:groups_users
- has-many:groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association


- has_many　:messages
- has_many :groups_users
- has_many:users ,through: :group_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text| |
|img|text| |
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|


## Association

- belongs_to :group
- belongs_to :user

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user

