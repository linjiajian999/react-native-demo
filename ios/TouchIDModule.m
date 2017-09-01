//
//  TouchIDModule.m
//  ReactNativeApp
//
//  Created by 林嘉健 on 2017/7/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TouchIDModule.h"

#import <LocalAuthentication/LocalAuthentication.h>

@implementation TouchIDModule
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(callTouchID: (RCTResponseSenderBlock)callback) {
  RCTLogInfo(@"callTouchID");
  
  LAContext* context = [[LAContext alloc] init];
  NSString* result = @"需要指纹验证";
  NSError* error = nil;
  // 如果支持touchID
  if ([context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&error]) {
    [context evaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics localizedReason:result reply:^(BOOL success, NSError * _Nullable error) {
      if (success) {
        RCTLogInfo(@"指纹验证成功");
        callback(@[[NSNull null], @"success"]);
      } else {
        callback(@[[NSNull null], @"fail"]);
        RCTLogInfo(@"%@", error.localizedDescription);
        switch (error.code) {
          case LAErrorSystemCancel: { // 系统取消
            RCTLogInfo(@"Authentication was cancelled by the system");
            break;
          }
          case LAErrorUserCancel: {
            RCTLogInfo(@"Authentication was cancelled by the user");
            break;
          }
          case LAErrorUserFallback:
          {
            NSLog(@"User selected to enter custom password");
            [[NSOperationQueue mainQueue] addOperationWithBlock:^{
              //用户选择输入密码，切换主线程处理
            }];
            break;
          }
          default:
          {
            [[NSOperationQueue mainQueue] addOperationWithBlock:^{
              //其他情况，切换主线程处理
            }];
            break;
          }
        }
      }
    }];
  } else {
    callback(@[[NSNull null], @"error"]);
    switch (error.code) {
      case LAErrorTouchIDNotEnrolled:
      {
        NSLog(@"TouchID is not enrolled");
        break;
      }
      case LAErrorPasscodeNotSet:
      {
        NSLog(@"A passcode has not been set");
        break;
      }
      default:
      {
        NSLog(@"TouchID not available");
        break;
      }
    }
  }
}
@end
