//
//  CalendarManager.m
//  ReactNativeApp
//
//  Created by 林嘉健 on 2017/7/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
@implementation CalendarManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location) {
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
