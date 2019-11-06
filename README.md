## Chatspace
## DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|username|string|null: false|

### Association

- has_many:groups
- has_many:messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association

- has_many :users
- has_many :group_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|integer|null: false|
|img|integer|null: false|

## Association

- belongs_to :group
- belongs_to :user

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :users